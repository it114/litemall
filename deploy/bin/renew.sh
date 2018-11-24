#杀死之前的进程
ps -ef |grep -w 'java'|grep -v grep|cut -c 9-15|xargs kill -9
#远程执行root
echo  ubuntu-18-04 | sudo sh ../start.sh
echo  ubuntu-18-04 | sudo cp  -R admin /var/www/html