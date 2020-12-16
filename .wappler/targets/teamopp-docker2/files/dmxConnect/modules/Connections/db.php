<?php
// Database Type : "PostgreSQL"
// Database Adapter : "postgres"
$exports = <<<'JSON'
{
    "name": "db",
    "module": "dbconnector",
    "action": "connect",
    "options": {
        "server": "postgres",
        "connectionString": "pgsql:dbname=teamopp;user=db_user;password=mgDSt1RY;host=db"
    }
}
JSON;
?>