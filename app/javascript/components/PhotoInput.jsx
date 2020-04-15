import React from 'react';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useEffect } from 'react';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const PhotoInput = ({ form, value }) => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
  };

  useEffect(() => {
    const values = JSON.parse(localStorage.getItem('availabilityReport'));
    const photoIdUrlMap = JSON.parse(localStorage.getItem('photoIdUrlMap'));
    if (values && values.photos) {
      const derivedFileList = values.photos.map(id => ({
        status: 'done',
        uid: `${id}`,
        name: photoIdUrlMap[id],
        url: photoIdUrlMap[id]
      }));
      setFileList(derivedFileList);
    }
  },[value])

  useEffect(() => {
    const derivedPhotoIdUrlMap = localStorage.getItem('photoIdUrlMap') ? JSON.parse(localStorage.getItem('photoIdUrlMap')) : {};
    fileList
      .filter(file => file.status === 'done' && file.response)
      .forEach(({ response: { photo_id, photo_url } }) => {
        derivedPhotoIdUrlMap[photo_id] = photo_url;
      });
    if (Object.keys(derivedPhotoIdUrlMap).length)localStorage.setItem('photoIdUrlMap', JSON.stringify(derivedPhotoIdUrlMap));
  }, [fileList]);

  const handleChange = ({ fileList }) => { 
    const photos = fileList
      .filter(file => file.status === 'done')
      .map(({ uid, response }) => response ? response.photo_id : parseInt(uid));
    form.setFieldsValue({ photos });
    setFileList(fileList);
  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  return (
    <div className="clearfix">
      <Upload
        action="/api/v1/photos"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </div>
  );
}

export default PhotoInput;