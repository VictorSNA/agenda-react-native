import Cores from '../constants/Cores';

const BotaoCabecalho = (props) =>{
    return (
        <HeaderButton
        {...props}
        IconComponent={Ionicons}
        iconSize={23}
        color={Platform.OS === 'android' ? 'black' : Cores.primary}
        />
    );
};

export default BotaoCabecalho;