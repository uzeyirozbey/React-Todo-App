import React, { Component } from 'react';
import {Button,Form} from 'semantic-ui-react';
import InlineError from './InlineError';
class OgrenciEkleForm extends Component{
    state = {
        Ad          : '',
        Soyad       : '',
        TcKimlikNo  : '',
        DogumTarihi : '',
        errors      : {}
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
    };

    //validate işlemleri
    validate = () => {
        const errors = {};
        if(!this.state.Ad)          {errors.Ad         = "Ad alanı zorunlu!!"}   
        if(!this.state.Soyad)       {errors.Soyad      = "Soyad alanı zorunlu!!"}
        if(!this.state.TcKimlikNo)  {errors.TcKimlikNo  = "Tc Kimlik No alanı zorunlu!!"}
        if(!this.state.DogumTarihi) {errors.DogumTarihi = "Doğum tarihi alanı zorunlu!!"}
        return errors;
    }

    render() {
        const {errors} = this.state;
        return (
            <div>
             <Form onSubmit={this.onSubmit}>
               <Form.Field>
                    <label>Tc Kimlik No</label>
                    {errors.TcKimlikNo && <InlineError message={ errors.TcKimlikNo }/>}
                    <input
                      id          = "TcKimlikNo"
                      name        = "TcKimlikNo"
                      value       = {this.state.TcKimlikNo}
                      onChange    = {this.handleChange}
                      placeholder = 'Tc Kimlik No' />
                </Form.Field>
               
                <Form.Field>
                    <label>Ad</label>
                    {errors.Ad && <InlineError message={ errors.Ad }/>}
                    <input
                      id         = "Ad"
                      name       = "Ad"
                      value      = {this.state.Ad}
                      onChange   = {this.handleChange }
                      placeholder= 'Ad' />
                </Form.Field>

                <Form.Field>
                    <label>Soyad</label>
                    {errors.Soyad && <InlineError message={ errors.Soyad }/>}
                    <input 
                     id          = "Soyad"
                     name        = "Soyad"
                     value       = {this.state.Soyad}
                     onChange    = {this.handleChange }
                     placeholder = 'Soyad' />
                </Form.Field>

                <Form.Field>
                    <label>Doğum Tarihi</label>
                    { errors.DogumTarihi && <InlineError message={ errors.DogumTarihi }/>}

                    <input 
                     id         ="DogumTarihi"
                     name       ="DogumTarihi"
                     value      ={this.state.DogumTarihi}
                     onChange   ={this.handleChange }
                     placeholder='Dogum Tarihi' />
                </Form.Field>

                <Button  color='teal' type='submit'>Kaydet</Button>
            </Form>
            </div>
        )
    }
}
export default OgrenciEkleForm