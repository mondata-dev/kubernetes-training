## Build & Deploy

```bash
docker build -t mondata/kubernetes-training:VERSION .
docker push mondata/kubernetes-training:VERSION
git tag -a VERSION
git push --follow-tags
```

## Test

Without docker:

```bash
COUNTER_PATH=/tmp RESPONSE=blah node server.js
```

With docker:

```bash
docker run -p 8080:8080 -e RESPONSE=blah mondata/kubernetes-training:1.0.0
```

Test the server:

```bash
curl http://localhost:8080/
curl http://localhost:8080/counter
```
