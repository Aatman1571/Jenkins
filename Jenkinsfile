pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the Spam Detection project...'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests for the spam detection model...'
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Running dependency scan with OWASP Dependency-Check plugin...'
                dependencyCheck odcInstallation: 'Default', additionalArguments: ''
            }
        }

        stage('Deploy') {
            steps {
                echo 'Simulating deployment of the spam detection model...'
            }
        }
    }

    post {
        always {
            echo 'Publishing the Dependency-Check report...'
            dependencyCheckPublisher pattern: '**/dependency-check-report/dependency-check-report.xml'
        }
    }
}
