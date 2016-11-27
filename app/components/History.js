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
        let reportList = this.state.reports
            .filter(report =>  (this.state.selectedUnit == null ||
            report.unitId == this.state.selectedUnit.unitId))
            .map((report, index) => {
            return (
                <tr key={report.reportId}> <td>{report.time}</td> <td>{report.quota}</td><td>{report.isAlert?'报警':'历史'}</td><td><button className='btn btn-success'  >查看</button></td></tr>
            );
        });

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    球体报警历史({this.state.selectedUnit == null ? '全部' : this.state.selectedUnit.name})
                </div>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>时间</th>
                        <th>参数</th>
                        <th>状态</th>
                        <th>照片</th>
                    </tr>
                    </thead>
                    <tbody>

                    {reportList}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default History;