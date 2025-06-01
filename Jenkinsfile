pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Compilando el proyecto Spam Detection...'
            }
        }

        stage('Test') {
            steps {
                echo 'Ejecutando pruebas del modelo de detección de spam...'
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Ejecutando escaneo de dependencias con OWASP Dependency-Check...'
                sh '/opt/dependency-check/bin/dependency-check.sh --project "SpamDetection" --scan . --format HTML --out dependency-report'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Simulando despliegue del modelo...'
            }
        }
    }
}
