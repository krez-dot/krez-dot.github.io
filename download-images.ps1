# download-images.ps1
# Downloads Unsplash images used by the site into an images/ folder.
# Run from the script directory: powershell -ExecutionPolicy Bypass -File download-images.ps1

$root = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $root
if (-Not (Test-Path 'images')) { New-Item -ItemType Directory -Path 'images' | Out-Null }

function Download-Image {
    param (
        [string]$Url,
        [string]$Output,
        [int]$Retries = 3
    )

    $headers = @{ 'User-Agent' = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    for ($i = 1; $i -le $Retries; $i++) {
        try {
            Write-Host "Downloading $Output (attempt $i/$Retries)..."
            Invoke-WebRequest -Uri $Url -OutFile $Output -Headers $headers -UseBasicParsing -TimeoutSec 30
            Write-Host "Saved $Output" -ForegroundColor Green
            return $true
        } catch {
            Write-Warning "Attempt $i failed: $($_.Exception.Message)"
            Start-Sleep -Seconds 3
        }
    }
    Write-Error "Failed to download $Output after $Retries attempts."
    return $false
}

$downloads = @(
    @{ Url = 'https://source.unsplash.com/1200x640/?coffee,cafe'; Output = 'images\hero.jpg' },
    @{ Url = 'https://source.unsplash.com/240x240/?coffee,espresso'; Output = 'images\espresso.jpg' },
    @{ Url = 'https://source.unsplash.com/240x240/?bakery,bread'; Output = 'images\bakery.jpg' },
    @{ Url = 'https://source.unsplash.com/240x240/?comfort-food,plate'; Output = 'images\plate.jpg' },
    @{ Url = 'https://source.unsplash.com/200x200/?portrait,elderly-woman'; Output = 'images\remedios.jpg' },
    @{ Url = 'https://source.unsplash.com/200x200/?portrait,man'; Output = 'images\marco.jpg' },
    @{ Url = 'https://source.unsplash.com/200x200/?portrait,woman'; Output = 'images\ana.jpg' },
    @{ Url = 'https://source.unsplash.com/320x200/?coffee-shop,storefront'; Output = 'images\cafe-exterior.jpg' }
)

$allSuccess = $true
foreach ($item in $downloads) {
    if (-not (Download-Image -Url $item.Url -Output $item.Output)) {
        $allSuccess = $false
    }
}

if ($allSuccess) {
    Write-Host "All downloads completed successfully." -ForegroundColor Green
} else {
    Write-Host "Some downloads failed. Try again later or save the images manually." -ForegroundColor Yellow
}
