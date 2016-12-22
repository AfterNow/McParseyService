# Parsy McParseFace Deployment

Contains configs for deploying to kube


## Create

`kubectl create -f ./kube/ --validate=false`

## Get external IP

It can take a little while for the external address to show up

`kubectl get service mcparse`

## Delete

`kubectl delete -f ./kube/`
