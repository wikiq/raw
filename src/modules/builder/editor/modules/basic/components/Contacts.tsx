import React, { ChangeEvent, Fragment } from 'react';
import TextField from '@mui/material/TextField';

const Contacts = ({
  basicTabs,
  onChangeHandler,
}: {
  basicTabs: any;
  onChangeHandler: (value: any, key: string) => void;
}) => {
  return (
    <Fragment>
      <TextField
        label="名字"
        variant="filled"
        value={basicTabs.name}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'name');
        }}
      />
      <TextField
        label="头像链接"
        variant="filled"
        value={basicTabs.image}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'image');
        }}
      />
      <TextField
        label="职务"
        variant="filled"
        value={basicTabs.label}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'label');
        }}
      />
      <TextField
        label="邮箱"
        variant="filled"
        value={basicTabs.email}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'email');
        }}
      />
      <TextField
        label="网站链接"
        variant="filled"
        value={basicTabs.url}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'url');
        }}
      />
      <TextField
        label="手机"
        variant="filled"
        value={basicTabs.phone}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'phone');
        }}
      />
      <TextField
        label="地址"
        variant="filled"
        value={basicTabs.location.city}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const location = basicTabs.location;
          location.city = event.target.value;
          onChangeHandler(location, 'location');
        }}
      />
      <TextField
        label="相关经验"
        variant="filled"
        value={basicTabs.relExp}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'relExp');
        }}
      />
      <TextField
        label="总体经验"
        variant="filled"
        value={basicTabs.totalExp}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'totalExp');
        }}
      />
    </Fragment>
  );
};

export default Contacts;
