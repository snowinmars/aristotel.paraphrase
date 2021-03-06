echo off

echo %block_end%

echo Running BE container...

echo %block_sep%

docker run -d ^
-p 50805:50805 ^
--net %network_name% ^
--ip %be_ip% ^
-v %logs_folder%:/app/_logs ^
-e PSQL_HOST=%db_ip% ^
-e PSQL_PORT=5432 ^
-e PSQL_DATABASENAME=ariph ^
-e PSQL_USER=postgres ^
-e NOTIFICATION_HOST=%ntf_ip% ^
-e NOTIFICATION_PORT=4697 ^
-e SERVER_SALT=SERVER_SALTSERVER_SALTSERVER_SALTSERVER_SALTSERVER_SALTSERVER_SALTSERVER_SALTSERVER_SALTSERVER_SALTSERVER_SALTSERVER_SALTSERVER_SALTSERVER_SALT ^
-e JWT_ISSUER=JWT_ISSUER ^
-e JWT_AUDIENCE=JWT_AUDIENCE ^
-e JWT_KEY=JWT_KEYJWT_KEYJWT_KEYJWT_KEYJWT_KEYJWT_KEYJWT_KEYJWT_KEY ^
-e JWT_LIFETIME=15 ^
ariph/be

echo %block_end%
