import React, { ChangeEvent, Fragment, useCallback } from 'react';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { useVoluteeringStore } from 'src/stores/volunteering';
import { IVolunteeringItem } from 'src/stores/volunteering.interface';
import { SwitchWidget } from 'src/helpers/common/atoms/Switch';
import { RichtextEditor } from 'src/helpers/common/components/richtext';
import { DATE_PICKER_FORMAT } from 'src/helpers/constants';

interface IVolunteerProps {
  volunteeringInfo: IVolunteeringItem;
  currentIndex: number;
}

const Volunteer: React.FC<IVolunteerProps> = ({ volunteeringInfo, currentIndex }) => {
  const onChangeHandler = useCallback(
    (name: string, value: any) => {
      const currentExpInfo = { ...volunteeringInfo };
      const updatedVolunteeringExp = useVoluteeringStore.getState().updatedVolunteeringExp;
      switch (name) {
        case 'organisation':
          currentExpInfo.organization = value;
          break;
        case 'role':
          currentExpInfo.position = value;
          break;
        case 'startDate':
          if (value?.isValid()) {
            currentExpInfo.startDate = value;
          }
          break;
        case 'isVolunteeringNow':
          currentExpInfo.isVolunteeringNow = value;
          break;
        case 'endDate':
          if (value?.isValid()) {
            currentExpInfo.endDate = value;
          }
          break;
        case 'summary':
          currentExpInfo.summary = value;
          break;
        default:
          break;
      }
      updatedVolunteeringExp(currentIndex, currentExpInfo);
    },
    [currentIndex, volunteeringInfo]
  );

  const onSummaryChange = useCallback(
    (htmlOutput: string) => {
      onChangeHandler('summary', htmlOutput);
    },
    [onChangeHandler]
  );

  return (
    <Fragment>
      <TextField
        label="组织结构"
        variant="filled"
        value={volunteeringInfo.organization}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          onChangeHandler('organisation', value);
        }}
        autoComplete="off"
        fullWidth
        required
        autoFocus={true}
        sx={{ marginBottom: '26px' }}
      />
      <TextField
        label="业绩"
        variant="filled"
        value={volunteeringInfo.position}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          onChangeHandler('role', value);
        }}
        autoComplete="off"
        fullWidth
        required
        sx={{ marginBottom: '26px' }}
      />
      <DatePicker
        label="开始日期"
        value={volunteeringInfo.startDate}
        onChange={(newDate) => {
          onChangeHandler('startDate', newDate);
        }}
        inputFormat={DATE_PICKER_FORMAT}
        renderInput={(params) => (
          <TextField {...params} variant="filled" autoComplete="off" fullWidth required />
        )}
      />
      <SwitchWidget
        label={'志愿服务'}
        value={volunteeringInfo.isVolunteeringNow ?? false}
        onChange={(newValue: boolean) => {
          onChangeHandler('isVolunteeringNow', newValue);
        }}
      />
      <DatePicker
        label="结束日期"
        value={volunteeringInfo.isVolunteeringNow ? null : volunteeringInfo.endDate}
        onChange={(newDate) => {
          onChangeHandler('endDate', newDate);
        }}
        inputFormat={DATE_PICKER_FORMAT}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            autoComplete="off"
            fullWidth
            required
            sx={{ marginBottom: '26px' }}
          />
        )}
        disabled={volunteeringInfo.isVolunteeringNow}
      />
      <RichtextEditor
        label="关于此次志愿服务经历"
        value={volunteeringInfo.summary}
        onChange={onSummaryChange}
        name="summary"
      />
    </Fragment>
  );
};

export default Volunteer;
