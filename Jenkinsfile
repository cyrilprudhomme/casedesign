// #!/usr/bin/env groovy
String appName = "casedesign"
// def scannerHome = tool 'SonarScanner';
pipeline {
    agent any
    options {
        ansiColor('xterm')
    }
    stages {
        // stage('SonarQube Analysis') {
        //     steps {
        //         withSonarQubeEnv('SonarScanner') {
        //             sh "${scannerHome}/bin/sonar-scanner"
        //         }
        //     }
        // }
        // stage("Quality Gate"){
        //     steps {
        //   timeout(time: 1, unit: 'HOURS') {
        //       def qg = waitForQualityGate()
        //       if (qg.status != 'OK') {
        //           error "Pipeline aborted due to quality gate failure: ${qg.status}"
        //       }
        //   }
        //   }
        // }
        stage('Création de l\'image') {
            steps {
               withDockerRegistry(credentialsId: 'UL-ADMIN', url: 'https://registry.kodwizz.fr') {
                sh "docker buildx build --push -t registry.kodwizz.fr/${appName}:latest ."
                sh "docker system prune -af --volumes"
              }
            }
        }
        // stage('Scan CVE') {
        //     steps {
        //         // sh "docker run aquasec/trivy run plugin install github.com/aquasecurity/trivy-plugin-webhook image kodwizz.fr:5000/${appName}:latest --insecure --format json --timeout 10m"
        //         sh 'docker run aquasec/trivy plugin run "github.com/aquasecurity/trivy-plugin-webhook" -- --url https://kodwizz.fr:3000 -- image registry.kodwizz.fr/'+appName+':latest --format json --timeout 10m'
        //     }
        // }
        stage('Deploiement du containeur') {
            steps {
               build job:'deploiement' , parameters:[
                string(name: 'PLAYBOOK_DEPLOY_NAME',value: 'deploiement'),
                string(name: 'VERBOSITY',value: '-v'),
                string(name: 'HOST_DEPLOY',value: 'production'),
                string(name: 'APP_NAME',value: appName)
             ]
            }
            // post {
            //     success {
            //         script {
            //             message.success '✔️ Déploiement Effectué'
            //         }
            //     }
            //     failure {
            //         script {
            //             message.error '❌ Déploiement en Erreur'
            //         }
            //     }
            // }
        }
    }
}
