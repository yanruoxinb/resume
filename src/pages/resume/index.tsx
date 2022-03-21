
import image from './assets/白.jpg';
import React from 'react';
import Iconfont from '../../components/iconfont';
import './index.css';
import { Steps } from 'antd';
import { baseInfo, educationInfo, skills } from './constant';
const { Step } = Steps;

const Resume: React.FC = () => {

    return (
        <div>
            <header className='person-info'>
                <div className='left'>
                    <img src={image}></img>
                </div>
                <div className='middle'>
                    <h2>王婷</h2>
                    <div>求职意向：web前端开发工程师</div>
                </div>
                <div className='right'>
                    {baseInfo.map(item => {
                        return <div className='info-item' key={item.label}>
                            <Iconfont type={item.icon} className='icon'></Iconfont>
                            <span className='label'>{item.label}:</span>
                            <span className='value'>{item.value}</span>
                        </div>
                    })}

                </div>
            </header>
            <main className='main'>
                <Steps current={4} direction='vertical'>
                    <Step
                        title="教育背景"
                        icon={<Iconfont type='icon-gangaotaijihaiwaidiqu' />}
                        description={
                            <div className='education'>
                                {Object.keys(educationInfo).map((key) => {
                                    return <span key={key}>{educationInfo[key]}</span>
                                })}
                            </div>
                        }
                    />
                    <Step
                        title="专业技能"
                        icon={<Iconfont type='icon-gangaotaijihaiwaidiqu' />}
                        description={
                            <div>
                                {skills.map(item => {
                                    return <div key={item}>
                                        <p>{item}</p>
                                    </div>
                                })}

                            </div>
                        }
                    />
                    <Step
                        title="项目经历"
                        icon={<Iconfont type='icon-gangaotaijihaiwaidiqu' />}
                        description={
                            <div>
                                <div>
                                    11111
                                </div>
                            </div>
                        }
                    />
                    <Step
                        title="自我评价"
                        icon={<Iconfont type='icon-gangaotaijihaiwaidiqu' />}
                        description={
                            <div>
                                <p>具有较好的团队协作和沟通能力，有强烈的责任心</p>
                                <p>逻辑思维能力较强，并且具有良好的分析解决问题能力</p>
                                <p>工作严谨细心，认真负责</p>
                            </div>
                        }
                    />
                </Steps>
            </main>
            <footer>

            </footer>

        </div>)

}

export default Resume;