import React, { Component } from 'react';
import PropTypes from "prop-types";
import {Button,Form} from 'semantic-ui-react';
import InlineError from './InlineError';
import { Message } from 'semantic-ui-react'
class OgrenciEkleForm extends Component{
     constructor(props){
         super(props);
         console.log(props);
    }
    state = {
        Ad          : '',
        Soyad       : '',
        TcKimlikNo  : '',
        DogumTarihi : '',
        errors      : {}
    }

    static propTypes = {
        //ekleme fonksiyonu
        yeniOgrenciEkle : PropTypes.func.isRequired
    }

    handleChange = (e) => {
       this.setState({
         [e.target.name] :e.target.value
      })
    }

    onSubmit = () => {
        const errors =this.validate();
        this.setState({
            errors
        });
        //validationdan geçmişse actionu çalıştır
        if(Object.keys(errors).length === 0){
          this.props.yeniOgrenciEkle(this.state);
        }
    };

    //validate işlemleri
    validate = () => {
        const errors = {};
        console.log(this.props.ogrenciEkle.fetching);
        if(!this.state.Ad)          {errors.Ad          = "Ad alanı zorunlu!!"}   
        if(!this.state.Soyad)       {errors.Soyad       = "Soyad alanı zorunlu!!"}
        if(!this.state.TcKimlikNo)  {errors.TcKimlikNo  = "Tc Kimlik No alanı zorunlu!!"}
        if(!this.state.DogumTarihi) {errors.DogumTarihi = "Doğum tarihi alanı zorunlu!!"}
        return errors;
    }

    render() {
        const {errors} = this.state;
        return (
            <div>
             <Form onSubmit={this.onSubmit} loading ={ this.props.ogrenciEkle.fetching}>
               <Form.Field error={!!errors.TcKimlikNo}>
                    <label>Tc Kimlik No </label>
                    {errors.TcKimlikNo && <InlineError message={ errors.TcKimlikNo }/>}
                    <input
                      id          = "TcKimlikNo"
                      name        = "TcKimlikNo"
                      value       = {this.state.TcKimlikNo}
                      onChange    = {this.handleChange}
                      placeholder = 'Tc Kimlik No' />
                </Form.Field>
               
                <Form.Field error={!!errors.Ad}>
                    <label>Ad</label>
                    {errors.Ad && <InlineError message={ errors.Ad }/>}
                    <input
                      id         = "Ad"
                      name       = "Ad"
                      value      = {this.state.Ad}
                      onChange   = {this.handleChange }
                      placeholder= 'Ad' />
                </Form.Field>

                <Form.Field error={!!errors.Soyad}>
                    <label>Soyad</label>
                    {errors.Soyad && <InlineError message={ errors.Soyad }/>}
                    <input 
                     id          = "Soyad"
                     name        = "Soyad"
                     value       = {this.state.Soyad}
                     onChange    = {this.handleChange }
                     placeholder = 'Soyad' />
                </Form.Field>

                <Form.Field error={!!errors.DogumTarihi}>
                    <label>Doğum Tarihi</label>
                    { errors.DogumTarihi && <InlineError message={ errors.DogumTarihi }/>}

                    <input 
                     id         ="DogumTarihi"
                     name       ="DogumTarihi"
                     value      ={this.state.DogumTarihi}
                     onChange   ={this.handleChange }
                     placeholder='Dogum Tarihi' />
                </Form.Field>
                 <div className="clearfix"></div>
                <Button  color='teal' type='submit'>Kaydet</Button>
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
            </div>
        )
    }
}
export default OgrenciEkleForm