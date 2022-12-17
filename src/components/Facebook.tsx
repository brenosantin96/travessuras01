import React, { useState } from 'react';
import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login'
import { Card, Image } from 'react-bootstrap';

export const Facebook = () => {

    const [login, setLogin] = useState(false);
    const [data, setData] = useState<ReactFacebookLoginInfo>();
    const [picture, setPicture] = useState('');


    const responseFacebook = ((response: any) => {
        console.log(response);
        setData(response);
        setPicture(response.picture.data.url);
        if (response.accessToken) {
            setLogin(true);
        } else {
            setLogin(false);
        }

    })


    return (
        <>
            <Card style={{ width: '600px' }}>
                <Card.Header>
                    {!login &&
                        <FacebookLogin
                            appId="1458498614608286"
                            autoLoad={true}
                            fields="name,email,picture"
                            scope="public_profile,email"
                            callback={responseFacebook}
                            icon="fa-facebook"
                            version='v15.0'
                            xfbml={true}
                             />
                    }
                    {login &&
                        <Image src={picture} roundedCircle />
                    }
                </Card.Header>
                {login && data !== undefined &&
                    <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Text>
                            {data.email}
                        </Card.Text>
                    </Card.Body>
                }
            </Card>
        </>
    )
}

