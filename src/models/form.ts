/*
 * @Description:
 * @version:
 * @Author: fengshuan
 * @Date: 2019-09-07 11:12:26
 * @LastEditors: fengshuan
 * @LastEditTime: 2019-09-07 14:00:50
 */
import { AnyAction } from 'redux';
import { EffectsCommandMap } from 'dva';
import { submitBasicForm } from '@/services/form';
import { message } from 'antd';

export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap & { select: <T>(func: (state: {}) => T) => T },
) => void;

export interface ModelType {
  namespace: string;
  state: {};
  effects: {
    submitBasicForm: Effect;
  };
}

const FormModel: ModelType = {
  namespace: 'form',
  state: {},
  effects: {
    *submitBasicForm({ payload }, { call }) {
      const res = yield call(submitBasicForm, payload);
      console.log('基础表单提交结果', res);
    },
  },
};

export default FormModel;
