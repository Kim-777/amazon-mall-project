import React, {useState, useEffect} from 'react'
import {Typography, Button, Form, Input} from 'antd';
import FileUpload from '../../utils/FileUpload';
import Axios from 'axios';
const { Title } = Typography;
const { TextArea } = Input;


const Continents = [
    {key: 1, value: "Africa"},
    {key: 2, value: "Europe"},
    {key: 3, value: "Asia"},
    {key: 4, value: "North America"},
    {key: 5, value: "South America"},
    {key: 6, value: "Australia"},
    {key: 7, value: "Antarctica"}
]

function UploadProductPage(props) {
    
    const [Name, setName] = useState('');
    const [Description, setDescription] = useState('');
    const [Price, setPrice] = useState(0);
    const [Continent, setContinent] = useState(1);
    const [Images, setImages] = useState([]);

    const nameChangeHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const descriptionChangeHandler = (event) => {
        setDescription(event.currentTarget.value);
    }

    const priceChangeHandler = (event) => {
        setPrice(event.currentTarget.value);
    }

    const continentChangeHandler = (event) => {
        setContinent(event.currentTarget.value);
    }

    const updateImages = (newImages) => {
        setImages(newImages);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if(!Title || !Description ||  !Price || !Continent || Images.length === 0) {
            return alert('모든 값을 넣어주셔야 합니다.');
        }

        const body = {
            writer: props.user.userData._id,
            title: Name,
            description: Description,
            price: Price,
            continents: Continent,
            images: Images
        }

        Axios.post('/api/product', body)
            .then(response => {
                if(response.data.success) {
                    alert('상품 업로드에 성공 했습니다.');
                    props.history.push('/');
                } else {
                    alert('상품 업로드에 실패 했습니다.');
                }
            })

    }

    return (
        <div style={{maxWidth: '700px', margin: '2rem auto'}}>
            <div style={{ textAlign: 'center', marginBottom: '2rem'}}>
                <Title level={2}> 여행 상품 업로드 </Title>
            </div>

            <Form onSubmit={submitHandler}>

                {/* DropZone */}

                <FileUpload refreshFunction={updateImages}/>

                
                <br />
                <br />

                <label>이름</label>
                <Input onChange={nameChangeHandler} value={Name} placeholder="이름을 입력해 주세용."/>

                <br />
                <br />

                <label>설명</label>
                <TextArea onChange={descriptionChangeHandler} value={Description}/>

                <br />
                <br />

                <label>가격</label>
                <Input type="number" onChange={priceChangeHandler} value={Price}/>

                <br />
                <br />

                <select onChange={continentChangeHandler} value={Continent}>
                    {Continents.map(continent => (
                        <option key={continent.key} value={continent.key}>{continent.value}</option>
                    ))}
                </select>

                <br />
                <br />

                <Button type="submit" onClick={submitHandler}>
                    확인
                </Button>


            </Form>
        </div>
    )
}

export default UploadProductPage
