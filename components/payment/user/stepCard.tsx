import Slider from 'react-slick';
import Cards from 'react-credit-cards';
import PayMethod from '../../../domain/user/PayMethod';

type Props = { payMethods: PayMethod[], payMethodIndex: number, setPayMethodIndex: Function };

const StepCard = ({ payMethods, setPayMethodIndex, payMethodIndex }: Props) => {
	
	const handleCardSelect = (index: number) => {
		setPayMethodIndex(index);
	};
	
	return (
		<div className='flex'>
			<div style={{ width: '300px', maxWidth: '100%' }} className='my-auto'>
				<h3 className='font-bold text-center mb-6'>Seleccione su método de pago:</h3>
				<Slider dots afterChange={handleCardSelect} initialSlide={payMethodIndex}>
					{
						payMethods.map((payMethod: PayMethod) => (
							<div className='div' key={payMethod.id}>
								<Cards
									number={payMethod.card_number + ''}
									name={payMethod.owner}
									expiry={'**/**'}
									cvc={'***'}
								/>
							</div>
						))
					}
				</Slider>
			</div>
		</div>
	);
};

export default StepCard;
