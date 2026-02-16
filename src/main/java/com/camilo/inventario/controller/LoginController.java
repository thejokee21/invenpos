package com.camilo.inventario.controller;

import javafx.fxml.FXML;
import javafx.scene.control.Alert;
import javafx.scene.control.Label;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.fxml.FXMLLoader;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.stage.Window;

//prueba commit
public class LoginController {

    @FXML
    private TextField txtUsuario;

    @FXML
    private PasswordField txtContrasenia;

    @FXML
    private Label label1; // opcional si no lo usas puedes quitarlo

    @FXML
    private void onIngresarClick() {

        String usuario = txtUsuario.getText();
        String password = txtContrasenia.getText();

        if (usuario.isEmpty() ||password.isEmpty()){
            showAlert(Alert.AlertType.ERROR, owner,
                    "Form Error!",
                    "Please enter your email and password");
            return;
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
    }
}
