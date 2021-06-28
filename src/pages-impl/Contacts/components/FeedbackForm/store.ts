import {action, makeObservable, observable} from 'mobx';

import {sendFeedback} from '@/services/feedback';
import {FeedbackParams} from '@/services/feedback/dto';


export type FeedbackRequestStatus = 'idle' | 'pending' | 'error' | 'success';

export class FeedbackStore {
    @observable
    feedbackStatus: FeedbackRequestStatus = 'idle';

    constructor() {
        makeObservable(this);
    }

    @action
    private feedbackError(): void {
        this.feedbackStatus = 'error';
    }

    @action
    private feedbackSuccess(): void {
        this.feedbackStatus = 'success';
    }

    @action
    async sendFeedback(params: FeedbackParams): Promise<void> {
        this.feedbackStatus = 'pending';

        const res = await sendFeedback(params);

        if (res.ok) {
            this.feedbackSuccess();
            return;
        }

        this.feedbackError();
    }
}
