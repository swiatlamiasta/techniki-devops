# To start:

kubectl apply -f app-configmap.yml

kubectl apply -f postgres-secret.yml
kubectl apply -f postgres-pvc.yml
kubectl apply -f postgres-deployment.yml
kubectl apply -f postgres-service-clusterip.yml

kubectl apply -f redis-deployment.yml
kubectl apply -f redis-service-clusterip.yml

kubectl apply -f backend-deployment.yml
kubectl apply -f backend-service-clusterip.yml

kubectl apply -f frontend-deployment.yml
kubectl apply -f frontend-service-clusterip.yml

kubectl apply -f ingress-service.yml

# To delete:

kubectl delete ingress my-ingress-service

kubectl delete svc my-frontend-service
kubectl delete svc my-backend-service
kubectl delete svc my-redis-service
kubectl delete svc my-postgres-service

kubectl delete deploy my-frontend-deployment
kubectl delete deploy my-backend-deployment
kubectl delete deploy my-redis-deployment
kubectl delete deploy my-postgres-deployment

kubectl delete pvc my-postgres-pvc
kubectl delete secret my-postgres-secret
kubectl delete configmap my-app-configmap