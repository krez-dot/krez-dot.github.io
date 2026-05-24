import urllib.request

url = 'https://source.unsplash.com/1200x640/?coffee,cafe'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, timeout=15) as r:
        print('status', r.status)
        print('url', r.geturl())
        data = r.read(100)
        print('len', len(data))
except Exception as e:
    print('error', repr(e))
