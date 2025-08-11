@Smoke
Feature: Versiones de K0lmena
    Scenario: Verificar que se puedan ver las versiones de k0lmena
        Given El usuario navega a la pagina de k0lmena
        When El usuario clickea el link de Changelog
        And El usuario clickea la version 2.0.0
        Then El usuario ve la informacion de la version 2.0.0