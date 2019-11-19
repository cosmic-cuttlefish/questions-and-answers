upstream loadbalance {
    least_conn;
    server 3.134.96.190:80;
    server 18.224.121.151:80;
}

server {
    location / {
        proxy_pass http://loadbalance;
    }
}