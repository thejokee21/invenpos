package com.camilo.inventario.database;

import java.sql.Connection;
import java.sql.DriverManager;

public class conexion {

    private static final String URL = "jdbc:mysql://localhost:3306/sistempos";
    private static final String USER = "root";
    private static final String PASSWORD = "";

    public static Connection conectar() {

        try {
            Connection conexion = DriverManager.getConnection(URL, USER, PASSWORD);
            System.out.println("Conexión exitosa");
            return conexion;

        } catch (Exception e) {
            System.out.println("Error de conexión");
            e.printStackTrace();
            return null;
        }
    }
}

