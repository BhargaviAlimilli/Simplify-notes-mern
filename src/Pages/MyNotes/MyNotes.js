import React, { useEffect } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import ScreenTemplate from "./../../components/ScreenTemp";
import { Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown"
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, listNotes } from "./../../actions/notes";
import Loading from "./../../components/Loading";
import ErrorMessage from "./../../components/Alert";


function MyNotes({ search }) {

  const dispatch = useDispatch();
  const history= useNavigate()

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const noteList = useSelector((state) => state.noteList);
  const { loading, error, notes } = noteList;

  const noteDelete = useSelector((state) => state.noteDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = noteDelete;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;



  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      history("/signin");
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    successUpdate,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
  };

  
  return (
    <ScreenTemplate title={`Start writing your notes ${userInfo && userInfo.name}..`}>

      <Link to="/createnote">
        <Button style={{ marginLeft: 6, marginBottom: 6 } } className="btn btn-warning" size="lg">
          + Add Note
        </Button>
      </Link> 
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {errorDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
      )}
      {loading && <Loading />}
      {loadingDelete && <Loading />}

      {notes && notes.notes && console.log(notes.notes)}
      {notes && notes.notes && notes.notes.filter((filteredNote) =>
            filteredNote.title.toLowerCase().includes(search.toLowerCase())
          ).reverse().map((note)=>(
        <Accordion >
        <Accordion.Item eventKey="0">
        <Card style={{ margin: 10 }} key={note._id}>
                <Card.Header style={{ display: "flex" }}>
                  <span
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}
                  >
                  <Accordion.Header>{note.title}</Accordion.Header>

                  </span>

                  <div>
                    <Button href={`/edit/${note._id}`}>Edit</Button>
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => deleteHandler(note._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Header>
              <Accordion.Body>
              <Card.Body>
                    <h4>
                      <Badge pill bg="secondary">
                        Category - {note.category}
                      </Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <ReactMarkdown>{note.content}</ReactMarkdown>
                      <footer className="blockquote-footer">
                        Created on{" "}
                        <cite title="Source Title">
                          {note.createdAt.substring(0, 10)}
                        </cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
              </Accordion.Body>
          </Card>  
        </Accordion.Item>        
        </Accordion>
       
      ))}

      
    </ScreenTemplate>
  );
}

export default MyNotes;
