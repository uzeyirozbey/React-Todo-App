import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Button, Form } from 'semantic-ui-react';
import { Redirect } from "react-router-dom";
import InlineError from './InlineError';
import { Message } from 'semantic-ui-react';
class OgrenciEkleForm extends Component {
    constructor(props) {
        super(props);
        //Listele sayfasına yönlendirmeyi engellemek için.
        // this.props.ogrenciEkle.done = false;
        //console.log(this.props.ogrenci);
    }
    state = {
        Id: this.props.ogrenci ? this.props.ogrenci.ID_OGRENCI : '',
        Ad: this.props.ogrenci ? this.props.ogrenci.AD : '',
        Soyad: this.props.ogrenci ? this.props.ogrenci.SOYAD : '',
        TcKimlikNo: this.props.ogrenci ? this.props.ogrenci.TC_KIMLIK_NO : '',
        DogumTarihi: this.props.ogrenci ? this.props.ogrenci.DOGUM_TARIHI : '',
        redirect :false,
        errors: {}
    }

    static propTypes = {
        //ekleme fonksiyonu
        yeniOgrenciEkle: PropTypes.func.isRequired
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //en son değişen propsları görmemizi sağlar
    componentWillReceiveProps(nextProps) {
        const { ogrencidetay }  = nextProps.ogrenciEkle;
        console.log(ogrencidetay);
        // if (ogrencidetay[0].AD && ogrencidetay[0].AD !== this.state.Ad) {
        //     this.setState({
        //         TcKimlikNo  : ogrencidetay[0].TC_KIMLIK_NO, 
        //         Ad          : ogrencidetay[0].AD,
        //         Soyad       : ogrencidetay[0].SOYAD,
        //         DogumTarihi : ogrencidetay[0].DOGUM_TARIHI
        //     })
        // }
    }

    onSubmit = () => {
        const errors = this.validate();
        this.setState({
            errors,
            redirect :true
        });
        const id = this.state.Id || this.props.ogrenciEkle.ogrenci[0].ID_OGRENCI;
        //validationdan geçmişse actionu çalıştır
        if (Object.keys(errors).length === 0) {
            //id yoksa yeni öğrenci eklenecek
               if(id == undefined)
                this.props.yeniOgrenciEkle(this.state);
               else    //id varsa var olan öğrenci güncellenecek.
               this.props.ogrenciGuncelle( {...this.state},id);
        }
    };

    //validate işlemleri
    validate = () => {
        const errors = {};
        if (!this.state.Ad) { errors.Ad = "Ad alanı zorunlu!!" }
        if (!this.state.Soyad) { errors.Soyad = "Soyad alanı zorunlu!!" }
        if (!this.state.TcKimlikNo) { errors.TcKimlikNo = "Tc Kimlik No alanı zorunlu!!" }
        if (!this.state.DogumTarihi) { errors.DogumTarihi = "Doğum tarihi alanı zorunlu!!" }
        return errors;
    }

    render() {
        const { errors } = this.state;
        const form = (
            <Form onSubmit={this.onSubmit} loading={this.props.ogrenciEkle.fetching || this.props.ogrenciEkle.ogrenci[0].fetching }>
                <Form.Field error={!!errors.TcKimlikNo}>
                    <label>Tc Kimlik No </label>
                    {errors.TcKimlikNo && <InlineError message={errors.TcKimlikNo} />}
                    <input
                        id="TcKimlikNo"
                        name="TcKimlikNo"
                        value={this.state.TcKimlikNo}
                        onChange={this.handleChange}
                        placeholder='Tc Kimlik No' />
                </Form.Field>

                <Form.Field error={!!errors.Ad}>
                    <label>Ad</label>
                    {errors.Ad && <InlineError message={errors.Ad} />}
                    <input
                        id="Ad"
                        name="Ad"
                        value={this.state.Ad}
                        onChange={this.handleChange}
                        placeholder='Ad' />
                </Form.Field>

                <Form.Field error={!!errors.Soyad}>
                    <label>Soyad</label>
                    {errors.Soyad && <InlineError message={errors.Soyad} />}
                    <input
                        id="Soyad"
                        name="Soyad"
                        value={this.state.Soyad}
                        onChange={this.handleChange}
                        placeholder='Soyad' />
                </Form.Field>

                <Form.Field error={!!errors.DogumTarihi}>
                    <label>Doğum Tarihi</label>
                    {errors.DogumTarihi && <InlineError message={errors.DogumTarihi} />}

                    <input
                        id="DogumTarihi"
                        name="DogumTarihi"
                        value={this.state.DogumTarihi}
                        onChange={this.handleChange}
                        placeholder='Dogum Tarihi' />
                </Form.Field>
                <div className="clearfix"></div>
                <Button color='teal' type='submit'>Kaydet</Button>
                {
                    this.props.ogrenciEkle.error.response
                    && (
                        <Message negative>
                            <Message.Header> Hata!!! </Message.Header>
                            <p> Hata oluştu.  </p>
                        </Message>
                    )
                }
            </Form>
        );
        return (
            <div>
                {
                    this.props.ogrenciEkle.done && this.state.redirect ? <Redirect to="/ogrenci" /> : form
                }
            </div>
        )
    }
}
export default OgrenciEkleForm