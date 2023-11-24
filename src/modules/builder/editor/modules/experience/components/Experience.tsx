import React, { ChangeEvent, Fragment, useCallback } from 'react';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { useExperiences } from 'src/stores/experience';
import { IExperienceItem } from 'src/stores/experience.interface';
import { SwitchWidget } from 'src/helpers/common/atoms/Switch';
import { RichtextEditor } from 'src/helpers/common/components/richtext';
import { DATE_PICKER_FORMAT } from 'src/helpers/constants';

interface IExperienceProps {
  experienceInfo: IExperienceItem;
  currentIndex: number;
}

const Experience: React.FC<IExperienceProps> = ({ experienceInfo, currentIndex }) => {
  const onChangeHandler = useCallback(
    (name: string, value: any) => {
      const currentExpInfo = { ...experienceInfo };
      const updateExperience = useExperiences.getState().updateExperience;
      switch (name) {
        case 'companyName':
          currentExpInfo.name = value;
          break;
        case 'position':
          currentExpInfo.position = value;
          break;
        case 'startDate':
          if (value?.isValid()) {
            currentExpInfo.startDate = value;
          }
          break;
        case 'isWorkingHere':
          currentExpInfo.isWorkingHere = value;
          break;
        case 'endDate':
          if (value?.isValid()) {
            currentExpInfo.endDate = value;
          }
          break;
        case 'years':
          currentExpInfo.years = value;
          break;
        case 'summary':
          currentExpInfo.summary = value;
          break;
        default:
          break;
      }
      updateExperience(currentIndex, currentExpInfo);
    },
    [currentIndex, experienceInfo]
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
        label="公司名称"
        variant="filled"
        value={experienceInfo.name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          onChangeHandler('companyName', value);
        }}
        autoComplete="off"
        fullWidth
        required
        autoFocus={true}
        sx={{ marginBottom: '26px' }}
      />
      <TextField
        label="职位"
        variant="filled"
        value={experienceInfo.position}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          onChangeHandler('position', value);
        }}
        autoComplete="off"
        fullWidth
        required
        sx={{ marginBottom: '26px' }}
      />
      <DatePicker
        label="开始日期"
        value={experienceInfo.startDate}
        onChange={(newDate) => {
          onChangeHandler('startDate', newDate);
        }}
        inputFormat={DATE_PICKER_FORMAT}
        renderInput={(params) => (
          <TextField {...params} variant="filled" autoComplete="off" fullWidth required />
        )}
      />
      <SwitchWidget
        label={'仍在这里工作'}
        value={experienceInfo.isWorkingHere ?? false}
        onChange={(newValue: boolean) => {
          onChangeHandler('isWorkingHere', newValue);
        }}
      />
      <DatePicker
        label="结束日期"
        value={experienceInfo.isWorkingHere ? null : experienceInfo.endDate}
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
        disabled={experienceInfo.isWorkingHere}
      />
      <TextField
        label="工作年份"
        variant="filled"
        value={experienceInfo.years}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          onChangeHandler('years', value);
        }}
        autoComplete="off"
        fullWidth
        sx={{ marginBottom: '26px' }}
      />
      <RichtextEditor
        label="关于这次工作经历"
        value={experienceInfo.summary}
        onChange={onSummaryChange}
        name="summary"
      />
    </Fragment>
  );
};

export default Experience;
