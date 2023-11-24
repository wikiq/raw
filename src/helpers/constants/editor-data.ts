import BasicLayout from 'src/modules/builder/editor/modules/basic/BasicLayout';
import SkillsLayout from 'src/modules/builder/editor/modules/skills/SkillsLayout';
import EducationLayout from 'src/modules/builder/editor/modules/education/EducationLayout';
import ExperienceLayout from 'src/modules/builder/editor/modules/experience/ExperienceLayout';
import ActivitiesLayout from 'src/modules/builder/editor/modules/activities/ActivitiesLayout';
import VolunteeringLayout from 'src/modules/builder/editor/modules/volunteering/VolunteeringLayout';
import AwardsLayout from 'src/modules/builder/editor/modules/awards/AwardsLayout';

export const headers: {
  [key: string]: { title: string; component: () => JSX.Element };
} = {
  'basic-details': { title: '基本信息', component: BasicLayout },
  'skills-and-expertise': {
    title: '专业技能',
    component: SkillsLayout,
  },
  education: { title: '教育经历', component: EducationLayout },
  experience: { title: '工作经验', component: ExperienceLayout },
  activities: { title: '项目经历', component: ActivitiesLayout },
  volunteering: { title: '志愿服务', component: VolunteeringLayout },
  awards: { title: '获奖经历', component: AwardsLayout },
};
