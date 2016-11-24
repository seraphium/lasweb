import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore'
import {first, without, findWhere} from 'underscore';

class History extends React.Component {

    constructor(props) {
        super(props);
        this.state = HomeStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        HomeStore.listen(this.onChange);

    }

    componentWillUnmount() {
        HomeStore.unlisten(this.onChange);
    }


    onChange(state) {
        this.setState(state);
    }


    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    球体报警历史
                </div>
                <table className="table table-hover">
                    <tbody>
                    <tr>
                        <th>名称</th>
                        <th>状态</th>
                        <th>照片</th>
                    </tr>
                    <tr> <td>aaa</td> <td>bbb</td><td><button className='btn btn-success'  >查看</button></td></tr>
                    <tr> <td>aaa</td> <td>bbb</td><td><button className='btn btn-danger disabled'  >获取失败</button></td></tr>
                    <tr> <td>aaa</td> <td>bbb</td><td><button className='btn btn-success'  >查看</button></td></tr>
                    <tr> <td>aaa</td> <td>bbb</td><td><button className='btn btn-success'  >查看</button></td></tr>
                    <tr> <td>aaa</td> <td>bbb</td><td><button className='btn btn-success'  >查看</button></td></tr>
                    <tr> <td>aaa</td> <td>bbb</td><td><button className='btn btn-success'  >查看</button></td></tr>
                    <tr> <td>aaa</td> <td>bbb</td><td><button className='btn btn-success'  >查看</button></td></tr>
                    <tr> <td>aaa</td> <td>bbb</td><td><button className='btn btn-success'  >查看</button></td></tr>


                    </tbody>
                </table>
            </div>

        );
    }
}

export default History;