import { useState, useEffect } from "react";
import React from "react";

import { Modal, Col, Row, Card } from "antd";
import { FaExchangeAlt } from "react-icons/fa";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { FastField, useFormik, FormikProvider } from "formik";
import "./ModalEditTabLayout.css";
import * as Yup from "yup";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import InputField from "../Input/InputField";
const validateBoxForm = Yup.object().shape({
  idbox: Yup.array().when(["."], (ipnumber) => {
    return Yup.array().of(
      Yup.number()
        .required("Required")
        .min(0)
        .max(12)

      // .test("unique", "IP Address is duplicated", (values) => {
      //   return new Set(ipnumber).size === ipnumber.length;
      // })
    );
  }),

  // integer().min(0).max(12).required("Please enter data"),
});
const dataSearchBox = [
  { title: "Search by author", count: 12, id: "id1" },
  { title: "Search by title", count: 12, id: "id2" },
  { title: "Filter by date range", count: 12, id: "id3" },
  { title: "Filter by group ", count: 12, id: "id4" },
  { title: "Search by publisher", count: 12, id: "id5" },
  { title: "Search by param_1", count: 12, id: "id6" },
  { title: "Filter by genre", count: 12, id: "id7" },
  { title: "Filter by param_2", count: 12, id: "id8" },
];
const dataSearchBox2 = [];
const ModalEditTabLayout = (props) => {
  const [visible, setVisible] = useState(false);

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
      idbox: [],
      dataOutput: dataSearchBox2,
      dataInput: dataSearchBox,
    },
    validationSchema: validateBoxForm,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const { setFieldValue, values } = formik;
  function increaseCount(index) {
    const tempArr = [...values.dataOutput];
    if (tempArr[index].count === 12) {
      return;
    }
    tempArr[index].count++;
    setFieldValue("dataOutput", tempArr);
  }
  function decreaseCount(index) {
    const tempArr = [...values.dataOutput];
    if (tempArr[index].count === 0) {
      return;
    }
    tempArr[index].count--;

    setFieldValue("dataOutput", tempArr);
  }

  useEffect(() => {
    console.log("formik", formik.values);
  }, [formik.values]);

  function handleOnDragEnd(result) {
    //if (!result.destination) return;
    if (
      result.source.droppableId === "data2" &&
      result.destination.droppableId === "characters"
    ) {
      const fixedItems = Array.from(values.dataOutput);
      const changeItems = Array.from(values.dataInput); // des
      const [reorderedItem] = fixedItems.splice(result.source.index, 1);
      changeItems.splice(result.destination.index, 0, reorderedItem);

      setFieldValue("dataInput", changeItems); // tang
      setFieldValue("dataOutput", fixedItems); // giam

      return;
    }
    if (
      result.source.droppableId === "characters" &&
      result.destination.droppableId === "data2"
    ) {
      const fixedItems = Array.from(values.dataInput);
      const changeItems = Array.from(values.dataOutput);
      const [reorderedItem] = fixedItems.splice(result.source.index, 1); // bo item character
      changeItems.splice(result.destination.index, 0, reorderedItem); // them item data2

      setFieldValue("dataInput", fixedItems); // giam
      setFieldValue("dataOutput", changeItems); // tang
      return;
    }
    if (result.destination.droppableId === "data2") {
      const items = Array.from(values.dataOutput);
      const [reorderedItem] = items.splice(result.source.index, 1); //At position x, remove 1 items:
      items.splice(result.destination.index, 0, reorderedItem);

      setFieldValue("dataOutput", items); // tang
    } else {
      const items = Array.from(values.dataInput);
      const [reorderedItem] = items.splice(result.source.index, 1); //At position x, remove 1 items:
      items.splice(result.destination.index, 0, reorderedItem);

      setFieldValue("dataInput", items); // tang
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
                <label className="font-medium">List search box</label>
              </Col>
              <Col span={2}></Col>

              <Col span={11}>
                <div className="flex justify-between ">
                  <label className="font-medium">Selected search box</label>
                  <label className="mr-8 font-medium">Size</label>
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
                        {values.dataInput.map(({ id, title }, index) => {
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
                                    <div className="p-2 font-medium">
                                      {title}
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
              <Col
                span={2}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaExchangeAlt style={{ fontSize: "20px" }}></FaExchangeAlt>
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
                        {values.dataOutput.map(
                          ({ id, title, count }, index) => {
                            return (
                              <Draggable
                                key={id}
                                draggableId={id}
                                index={index}
                              >
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
                                        <div className="p-2 font-medium">
                                          {index + 1}.{title}
                                        </div>

                                        <div className="flex flex-row items-center">
                                          <IoMdRemove
                                            onClick={() => decreaseCount(index)}
                                            className="cursor-pointer"
                                          ></IoMdRemove>
                                          <input
                                            type="text"
                                            id={id}
                                            name={`idbox.${id}`}
                                            value={count}
                                            readOnly
                                            disabled
                                            style={{ borderStyle: "none" }}
                                            size="1"
                                            className="text-center font-medium"
                                            onChange={formik.handleChange}
                                          />
                                          <IoMdAdd
                                            onClick={() => increaseCount(index)}
                                            className="cursor-pointer"
                                          ></IoMdAdd>
                                        </div>
                                      </div>
                                    </Card>
                                  </div>
                                )}
                              </Draggable>
                            );
                          }
                        )}
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
