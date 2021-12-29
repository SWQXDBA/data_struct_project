import React, {Component} from 'react';
import {Button, Col, Input, Row} from "antd";
import axios from "axios";


export class KmpTest extends Component {
    state = {
        str1:'',
        str2:'',
        response:''
    }
    search = ()=>{

        const {str1,str2} = this.state
        // eslint-disable-next-line no-template-curly-in-string
        var path = 'http://localhost:8080/kmp?str1='+str1+'&str2='+str2
        axios.get(path).then(res=>{

           const {index,next} = res.data.data
            if(index===-1){
                this.setState({
                    response:'未找到目标子串'
                })
            }else{
                // eslint-disable-next-line no-template-curly-in-string
                let s = '位置'+index+',next数组: '
                next.forEach(val=>{
                    s+=val+' '
                })
                this.setState({
                    response:s
                })
            }
        })
    }
    fill1 = (e)=>{
       this.setState({
           str1:e.target.value
       })
    }
    fill2 = (e)=>{
        this.setState({
            str2:e.target.value
        })
    }
    render() {
        return (
            <>
                <Row justify="center" align="middle" style={{height: '300px'}}>
                    <Col span={6} style={{border: '1px solid black', padding: '15px'}}>
                        请输入主串
                        <Input type={"text"} onChange = {this.fill1}/>
                        请输入子串
                        <Input type={"text"} onChange = {this.fill2}/>
                        <Button onClick = {this.search}>搜索</Button>
                        {this.state.response}
                    </Col>

                </Row>
            </>
        );
    }
}

