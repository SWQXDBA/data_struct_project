import React, {Component} from 'react';
import {Button, Col, message, Row, Upload} from 'antd';
import {InboxOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import axios from "axios";
import {KmpTest} from "../kmpTest";

const {Dragger} = Upload;

const uploadAndCompress = {
    name: 'file',
    method: 'post',
    action: 'http://localhost:8080/uploadAndCompress',
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};
const uploadAnddecompression = {
    name: 'file',
    method: 'post',
    action: 'http://localhost:8080/uploadAnddecompression',
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

export class Compress extends Component {
    state = {
        downloadPath: ""
    }


    onChangeSp = (info) => {
        const {status} = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} 上传成功.`);
            this.setState({
                downloadPath: info.file.response.data
            })
        //    console.log(this.state)
          //  alert(this.state)
        } else if (status === 'error') {
            message.error(`${info.file.name} 上传失败.`);
        }
    }



    downLoad = () => {
        window.open('http://localhost:8080/downLoad?downloadPath=' + this.state.downloadPath)
    }

    render() {
        return (
            <>
                <Row justify="center" align="middle" style={{height: '300px'}}>
                    <Col span={6} style={{border: '1px solid black', padding: '15px'}}>
                        <Dragger {...uploadAndCompress} onChange={this.onChangeSp}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined/>
                            </p>
                            <p className="ant-upload-text">点击或者拖入文件来上传</p>
                            <p className="ant-upload-hint">
                                上传要压缩的文件
                            </p>
                        </Dragger>
                    </Col>
                    <Col span={6} style={{border: '1px solid black', padding: '15px'}}>
                        <Dragger {...uploadAnddecompression} onChange={this.onChangeSp}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined/>
                            </p>
                            <p className="ant-upload-text">点击或者拖入文件来上传</p>
                            <p className="ant-upload-hint">
                                上传要解压的文件
                            </p>
                        </Dragger>
                    </Col>
                </Row>
                <Row justify="center" align="middle">
                    <Col offset={3} span={6}>
                        <Button disabled={this.state.downloadPath === ""} onClick={this.downLoad}> 点击下载 </Button>
                    </Col>
                </Row>
                <Row justify="center" align="middle">
                    <Col offset={0} span={12}>
                        <KmpTest/>
                    </Col>
                </Row>
            </>
        );
    }
}



