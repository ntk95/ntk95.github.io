import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentList from './StudentList.jsx';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {addStudent,deleteStudent,updateStudent} from './actions/studentActions'

class App extends Component {
  constructor(props)
  {
    super(props);
    this.addNewStudent = this.addNewStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
    this.editStudentSubmit = this.editStudentSubmit.bind(this);
  }
  componentWillMount(){

  }
  addNewStudent()
  {
this.props.addStudent({id:Math.max(...this.props.studentList.map(function(o){return o.id})) + 1,name:'',grade:1,school:''});
  }

  deleteStudent(id)
  {
    let r = window.confirm("Bạn có muốn xóa học sinh này không?");
    if( r === true)
    {
    this.props.deleteStudent(id);
   
  }
  }
  editStudentSubmit(id,name,grade,school)
  {
this.props.updateStudent({id:id,name:name,grade:grade,school:school});
  }
  render() {
    return (
      <div className="container-fluid">
      <div className="row mt-3"><div className="col-lg-12">
      <div className="card">
  <div className="card-header">
    Bảng danh sách học sinh
  </div>
  <div className="card-body">
  <table className="table table-hover">
          <thead className="thead-dark"><tr><th>Tên</th><th>Lớp</th><th>Trường</th><th>Chỉnh sửa/Lưu</th><th>Xóa</th></tr></thead>
          <StudentList deleteStudent={this.deleteStudent} studentList={this.props.studentList} editStudentSubmit={this.editStudentSubmit}/>
        </table>
        <button className="btn btn-dark pull-left" onClick={this.addNewStudent}>Thêm học sinh mới</button>
      </div></div></div></div></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    studentList : state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addStudent:addStudent,
    deleteStudent:deleteStudent,
    updateStudent:updateStudent
  },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
