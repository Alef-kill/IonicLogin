import './ExploreContainer.css';

import { IonButton, IonInput, IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const history = useHistory();
  return (
    <div className="container">
      <IonText>
        Usuário
      </IonText>
      <IonInput placeholder="Digite o seu nome de usuário">

      </IonInput>
      <IonText>
        Senha
      </IonText>
      <IonInput
        placeholder="Digite a sua senha"
        type="password"
        class="input"
      />
      <IonButton expand="full" color="danger"
      onClick={(e) => {
        e.preventDefault();
        history.push("/alef");
      } }>
        Entrar
      </IonButton >
      <IonButton expand="full" slot="light" 
      class="input2" 
      onClick={(e) => {
        e.preventDefault();
        history.push("/email");
      }} >
        Fazer cadastro
      </IonButton>
    </div>
  );
};

export default ExploreContainer;
