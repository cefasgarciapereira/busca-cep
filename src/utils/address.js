import { showMessage } from "react-native-flash-message";

export async function getAddressByCep(cep) {

    if(!cep){
        showMessage({
            message: "Forneça um CEP",
            type: "warning",
        });
        return false
    }

    try {
      let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let responseJson = await response.json();
        console.log(responseJson)
        if(!responseJson.erro){
            return responseJson;
        }else{
            showMessage({
                message: "CEP inválido",
                type: "warning",
                });
                return false
        }
    } catch (error) {
        showMessage({
            message: 'Erro inesperado: '+error,
            type: "danger",
            });
        return false
    }
  }