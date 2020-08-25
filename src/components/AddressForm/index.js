import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Input from '../Input';
import Button from '../Button';
import Loading from '../Loading';
import styles from './styles';
import {getAddressByCep} from '../../utils/address';

export default function AddressForm(){
    const [address, setAddress] = useState({
        cep: '',
        street: '',
        city: '',
        uf: ''
    });
    const [isLoading, setIsLoading] = useState(false)

    const _handleCEP = async () =>{
        setIsLoading(true);
        const apiAddress = await getAddressByCep(address.cep)
        if(apiAddress){
            setAddress({
                ...address,
                street: apiAddress.logradouro,
                city: apiAddress.localidade,
                uf: apiAddress.uf
            })
        }
        setIsLoading(false);
    }

    return(
        <View style={styles.container}>
            <Loading loading={isLoading}/>
            <Input
                placeholder="CEP"
                name='cep'
                keyboardType='number-pad'
                value={address.cep}
                onChange={(text) => setAddress({...address, cep: text})}
                onBlurAction = {() => {_handleCEP()}}/>
            <Input
                placeholder="Rua"
                value={address.street}
                onChange={(text) => setAddress({...address, street: text})}/>
            <Input
                placeholder="Cidade"
                value={address.city}
                onChange={(text) => setAddress({...address, city: text})}/>
            <Input
                placeholder="Estado"
                value={address.uf}
                onChange={(text) => setAddress({...address, uf: text})}/>

            <Button
            label="Limpar"
            action={() => setAddress({})}/>
        </View>
    )
}