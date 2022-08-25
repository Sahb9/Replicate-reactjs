import { useState } from "react";
import { Modal, Col, Row, Card } from "antd";
import { FaExchangeAlt } from "react-icons/fa";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { FastField, useFormik, FormikProvider } from "formik";
import "./ModalEditTabLayout.css";
import * as Yup from "yup";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import InputField from "../Input/InputField";
const validateUserForm = Yup.object().shape({
  label: Yup.string().trim().required("Please input your Label"),
  match: Yup.string().trim().required("Please input your match"),
});
const dataSearchBox = [
  { title: "Search by author", count: 12, id: "id1" },
  { title: "Search by title", count: 12, id: "id2" },
  { title: "Filter by date range", count: 12, id: "id3" },
  { title: "Filter by group ", count: 12, id: "id4" },
];
const dataSearchBox2 = [
  { title: "Search by publisher", count: 12, id: "id5" },
  { title: "Search by param_1", count: 12, id: "id6" },
  { title: "Filter by genre", count: 12, id: "id7" },
  { title: "Filter by param_2", count: 12, id: "id8" },
];
const ModalEditTabLayout = (props) => {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [characters, updateCharacters] = useState(dataSearchBox);
  const [data2, updateData2] = useState(dataSearchBox2);

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    //updateCharacters(dataSearchBox);
    //updateData2(dataSearchBox2);
    setVisible(false);
  };
  const formik = useFormik({
    initialValues: {
      label: "",
      match: "",
    },
    validationSchema: validateUserForm,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  function increaseCount(id) {
    const objIndex = data2.findIndex((obj) => obj.id === id);
    if (data2[objIndex].count === 12) {
      return;
    }
    data2[objIndex].count++;
    //console.log(dataSearchBox2[objIndex].count);
  }
  function decreaseCount(id) {
    const objIndex = data2.findIndex((obj) => obj.id === id);
    if (data2[objIndex].count === 0) {
      return;
    }
    data2[objIndex].count--;
    console.log(data2);
    //console.log(dataSearchBox2[objIndex].count);
  }

  function handleOnDragEnd(result) {
    //if (!result.destination) return;
    if (
      result.source.droppableId === "data2" &&
      result.destination.droppableId === "characters"
    ) {
      const items2 = Array.from(data2);
      const items = Array.from(characters); // des
      const [reorderedItem] = items2.splice(result.source.index, 1); // bo 1 item tai vi tri index
      items.splice(result.destination.index, 0, reorderedItem); // them 1 item
      updateData2(items2); // update cai bi bo
      updateCharacters(items); // updapte new item
      return;
    }
    if (
      result.source.droppableId === "characters" &&
      result.destination.droppableId === "data2"
    ) {
      const items2 = Array.from(characters);
      const items = Array.from(data2);
      const [reorderedItem] = items2.splice(result.source.index, 1); // bo item character
      items.splice(result.destination.index, 0, reorderedItem); // them item data2

      updateData2(items);
      console.log(items);
      updateCharacters(items2);
      return;
    }
    if (result.destination.droppableId === "data2") {
      const items = Array.from(data2);
      const [reorderedItem] = items.splice(result.source.index, 1); //At position x, remove 1 items:
      console.log([reorderedItem]);
      items.splice(result.destination.index, 0, reorderedItem);

      updateData2(items);
    } else {
      const items = Array.from(characters);
      const [reorderedItem] = items.splice(result.source.index, 1); //At position x, remove 1 items:
      console.log([reorderedItem]);
      items.splice(result.destination.index, 0, reorderedItem);

      updateCharacters(items);
    }
  }

  return (
    <>
      <div onClick={showModal}>{props.children}</div>

      <Modal
        title="EDIT SEARCH BOX"
        visible={visible}
        onOk={hideModal}
        onCancel={hideModal}
        okText="EDIT SEARCH BOX"
        cancelText="CANCEL"
        width={800}
      >
        <FormikProvider value={formik}>
          <FastField label="Title" name="title" component={InputField} />
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Row>
              <Col span={11}>
                <label>List search box</label>
              </Col>
              <Col span={2}></Col>

              <Col span={11}>
                <div className="flex justify-between ">
                  <label>Selected search box</label>
                  <label>Size</label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={11} style={{ background: "#D9E0E8" }}>
                <div className="m-3 ">
                  <Droppable droppableId="characters">
                    {(provided) => (
                      <div
                        className="characters"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{ height: "400px" }}
                      >
                        {characters.map(({ id, title }, index) => {
                          return (
                            <Draggable key={id} draggableId={id} index={index}>
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="my-2"
                                >
                                  <Card
                                    style={{
                                      height: 40,
                                    }}
                                    className="flex justify-center items-center"
                                  >
                                    <div>{title}</div>
                                  </Card>
                                </div>
                              )}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              </Col>
              <Col
                span={2}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaExchangeAlt></FaExchangeAlt>
              </Col>
              <Col span={11} style={{ background: "#D9E0E8" }}>
                <div className="m-3">
                  <Droppable droppableId="data2">
                    {(provided) => (
                      <div
                        className="data2"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{ height: "400px" }}
                      >
                        {data2.map(({ id, title, count }, index) => {
                          return (
                            <Draggable key={id} draggableId={id} index={index}>
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="my-2"
                                >
                                  <Card
                                    style={{
                                      height: 40,
                                    }}
                                    className="flex justify-between items-center"
                                  >
                                    <div className="flex flex-row  justify-between items-center">
                                      <div>{title}</div>

                                      <div className="flex flex-row items-center">
                                        <IoMdRemove
                                          onClick={() => decreaseCount(id)}
                                          className="cursor-pointer"
                                        ></IoMdRemove>
                                        <div>{count}</div>
                                        <IoMdAdd
                                          onClick={() => increaseCount(id)}
                                          className="cursor-pointer"
                                        ></IoMdAdd>
                                      </div>
                                    </div>
                                  </Card>
                                </div>
                              )}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              </Col>
            </Row>
          </DragDropContext>
        </FormikProvider>
      </Modal>
    </>
  );
};
export default ModalEditTabLayout;
