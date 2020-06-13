# Docker 

docker ps = show a list of running containers  
docker ps -a = show a list of all containers  
docker run IMAGE = start a new container from an image  
docker run --name CONTAINER IMAGE = start a new container with passed name from an image  
docker run -p HOSTPORT:CONTAINERPORT IMAGE = start a new container from an image and map a port  
docker run -d IMAGE = start a new container from an image in a background  
docker run -v HOSTDIR:TARETDIR IMAGE = start a new container from an image and map a local directory into the container  
docker run -it IMAGE CMD = start a new container from an image and run a command  
docker build -t IMAGE[:TAG] DIR = build and tag an image from Dockerfile  
docker tag IMAGE NEWIMAGE = tag an image  
docker rmi IMAGE = delete an image  
docker image prune = delete dangling images  
docker image prune -a  = delete all unused images  
docker save IMAGE > FILE = save an image to a file  
docker load -i FILE = load an image from a file  
docker rm CONTAINER = delete a container  
docker rm -f CONTAINER = delete a running container  
docker container prune = delete stopped containers  
docker stop CONTAINER = stop container  
docker start CONTAINER = start container  
docker cp CONTAINER:SOURCE TARGET = copy a file from a container to the host  
docker cp TARGET CONTAINER:SOURCE = copy a file from the host to a container  
docker exec -it CONTAINER CMD = start a command inside a running container  
docker rename OLD NEW = rename a container  
docker commit CONTAINER = create an image out of container

docker version = show installed docker version  
docker stats = show stats of running containers  
docker logs CONTAINER = show the logs of a container  
docker images = show a list of all images  
docker pull IMAGE[:TAG] = download an image  
docker push IMAGE[:TAG] = upload an image to repository  


# Vim

Command Mode = ESC + :  
Insertion Mode = i/I/a/A/o/O  

:w = save  
:x = save & exit  
:q = quit  
:q! = quit & discard changes  
h/left = left cursor  
j/down = down cursor  
k/up = up cursor  
l/right = right cursor  
w/b/e = next/start/end word  
0/$ = beginning/end of line  
1G/G/:n = start/end/nth line of file  
H/M/L = top/middle/bottom of screen  
D = delete the rest of line  
dd/:d = delete current line  
/string = search forward for string  
?string = search backward for string  
n/N = go to next/previous match  
:s/pattern/string/g = replace all occurrences of pattern
i/I = insert before cursor/line  
a/A = append after cursor/line  
o/O = new line after/before current line  
p/P = put after/before the position or line  
x/X = delete character to right/left of the cursor  

# Kubernetes

TYPE = [pod|(rs|replicaset)|(deploy|deployment)|(svc|service)|pvc|secret]

kubectl version = get version information  
kubectl cluster-info = get cluster information  
kubectl config current-context = get current context information 
kubectl create -f FILE = create types for passed file  
kubectl delete TYPE NAME = delete type with passed name  
kubectl get TYPE = get all elements in passed type  
kubectl get all = get all elements in all types  
kubectl describe TYPE NAME = get information about passed type with passed name  
kubectl logs TYPE NAME = get logs for passed type with passed name  
kubectl scale --replicas=VALUE rs RSNAME = set replicas for passed replicaset name  
kubectl replace -f FILE = replace elements by file  
kubectl apply -f FILE = apply configuration from file  
kubectl exec -ti dnsutils -- nslookup SVCNAME = get DNS information for service with passed name
