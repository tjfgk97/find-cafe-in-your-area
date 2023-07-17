import DaumPostcodeEmbed from "react-daum-postcode";
import '../../style/DaumMapStyle.css';

const { kakao } = window;

const DaumMap = ({company, setcompany}) => {
    const complete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if(data.addressType === 'R'){
            if(data.bname !== ''){
                extraAddress += data.bname;
            }
            if(data.buildingName !== ''){
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        const geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch(fullAddress, function(result, status){
            if(status === kakao.maps.services.Status.OK){
                setcompany({
                    address: fullAddress,
                    lng: result[0].x,
                    lat: result[0].y,
                })
            }
        });
    }

    return(
        <div>
            <DaumPostcodeEmbed
                className="daum_map_modal"
                onComplete={complete}
                autoClose
            />
        </div>
    );
}

export default DaumMap;