# To start:

kubectl apply -f k8s/app-configmap.yml

kubectl apply -f k8s/postgres-secret.yml
kubectl apply -f k8s/postgres-pvc.yml
kubectl apply -f k8s/postgres-deployment.yml
kubectl apply -f k8s/postgres-service-clusterip.yml

kubectl apply -f k8s/redis-deployment.yml
kubectl apply -f k8s/redis-service-clusterip.yml

kubectl apply -f k8s/backend-deployment.yml
kubectl apply -f k8s/backend-service-clusterip.yml

kubectl apply -f k8s/frontend-deployment.yml
kubectl apply -f k8s/frontend-service-clusterip.yml

kubectl apply -f k8s/ingress-service.yml

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