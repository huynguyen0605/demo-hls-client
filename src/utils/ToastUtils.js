import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const TYPE = {
    SUCCESS: 'success',
    WARN: 'warning',
    INFO: 'info',
    ERROR: 'error',
};

class ToastUtils {
    static success(message) {
        this.show(TYPE.SUCCESS, message);
    };
    static info(message) {
        this.show(TYPE.INFO, message);
    };
    static warn(message) {
        this.show(TYPE.WARN, message);
    };
    static error(message) {
        this.show(TYPE.ERROR, message);
    };
    static errorApi(error) {
        if (axios.isCancel(error)) {
            return;
        };

        let message = null;

        if (error.httpStatusCode >= 500) {
            message = 'Có lỗi bất ngờ xảy ra!';
        } else if (error.httpStatusCode >= 400 && error.httpStatusCode < 500) {
            message = 'Request không hợp lệ!';
        } else {
            if (error.errorMessage) {
                message = error.errorMessage
            }
        };

        toast.error(message, {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    };

    static show(type, message) {
        const options = {
            position: toast.POSITION.BOTTOM_RIGHT,
        };
        switch (type) {
            case TYPE.SUCCESS: 
                toast.success(message, options);
                break;
            case TYPE.WARN:
                toast.warn(message, options);
                break;
            case TYPE.INFO:
                toast.info(message, options);
                break;
            case TYPE.ERROR:
                toast.error(message, options);
                break;
            default:
                break;
        };
    };
};

export default ToastUtils;
