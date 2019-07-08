import _ from 'lodash';
import Utils from '../helper/rendererUtils';
import { EntryStatic } from '../bower_components/entry-js/extern/util/static.js';

/**
 * entryjs 내 포함되어있는 EntryStatic 에 추가적인 코드를 덮어쓰기 하는 로직
 */

const originGetAllBlocks = EntryStatic.getAllBlocks;
EntryStatic.getAllBlocks = () => {
    const allBlocks = originGetAllBlocks();
    const arduino = _.find(allBlocks, ['category', 'arduino']);
    const { blocks } = arduino;
    const index = blocks.indexOf('arduino_open');
    blocks.splice(index, 1);
    return allBlocks;
};

const sharedObject = Utils.getSharedObject();
EntryStatic.baseUrl = sharedObject && sharedObject.baseUrl;

export default EntryStatic;
