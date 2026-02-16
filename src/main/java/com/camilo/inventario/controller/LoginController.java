package com.camilo.inventario.controller;

import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.fxml.FXMLLoader;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class LoginController {

    @FXML
    private TextField txtUsuario;

    @FXML
    private PasswordField txtContrasenia;

    @FXML
    private Label label1; // opcional si no lo usas puedes quitarlo

    @FXML
    private void onIngresarClick() {


        Connection conexion;
        String usuario = txtUsuario.getText();
        String password = txtContrasenia.getText();

        try (Connection conn = Conexion.conectar()) {

            String sql = "SELECT * FROM usuarios WHERE usuario = ? AND password = ?";

            PreparedStatement ps = conn.prepareStatement(sql);
            ps.setString(1, usuario);
            ps.setString(2, password);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                System.out.println("Login correcto");
            } else {
                System.out.println("Usuario o contraseña incorrectos");
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

        if (usuario.equals("admin") && password.equals("1234")) {

            try {
                FXMLLoader loader = new FXMLLoader(
                        getClass().getResource("/fxml/dashboard-view.fxml")
                );

                Stage stage = (Stage) txtUsuario.getScene().getWindow();
                stage.setScene(new Scene(loader.load()));

            } catch (Exception e) {
                e.printStackTrace();
            }

        } else {
            label1.setText("Credenciales incorrectas");
        }
    }

    @FXML
    private void onLimpiarClick() {
        txtUsuario.clear();
        txtContrasenia.clear();
