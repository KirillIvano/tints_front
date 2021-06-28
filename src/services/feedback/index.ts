import {feedbackResource} from '@/resources/feedback';
import {getApiUrl} from '@/util/getApiUrl';

import {FeedbackParams} from './dto';

export const sendFeedback = (params: FeedbackParams) =>
    feedbackResource.makeRequest(getApiUrl('/feedback/'), {
        method: 'POST',
        body: JSON.stringify(params),
    });
