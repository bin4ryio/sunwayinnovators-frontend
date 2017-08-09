<template>
  <Form :model="formItem" :label-width="80">
    <Form-item label="Name">
      <Input v-model="formItem.input" placeholder="What is your name...?"></Input>
    </Form-item>
    <Form-item label="State">
      <Select v-model="formItem.select" placeholder="Please select one">
        <Option value="beijing">北京市</Option>
        <Option value="shanghai">上海市</Option>
        <Option value="shenzhen">深圳市</Option>
      </Select>
    </Form-item>
    <Form-item label="Date">
      <Row>
        <Col span="11">
          <Date-picker type="date" placeholder="Select Date" v-model="formItem.date"></Date-picker>
        </Col>
        <Col span="2" style="text-align: center">Time</Col>
        <Col span="11">
          <Time-picker type="time" placeholder="Select Time" v-model="formItem.time"></Time-picker>
        </Col>
      </Row>
    </Form-item>
    <Form-item label="Radio">
      <Radio-group v-model="formItem.radio">
        <Radio label="male">Male</Radio>
        <Radio label="female">Female</Radio>
      </Radio-group>
    </Form-item>
    <Form-item label="Choice">
      <Checkbox-group v-model="formItem.checkbox">
        <Checkbox label="Food"></Checkbox>
        <Checkbox label="Sleep"></Checkbox>
        <Checkbox label="Run"></Checkbox>
        <Checkbox label="Movie"></Checkbox>
      </Checkbox-group>
    </Form-item>
    <Form-item label="Switch">
      <i-switch v-model="formItem.switch" size="large">
        <span slot="open">On</span>
        <span slot="close">Off</span>
      </i-switch>
    </Form-item>
    <Form-item label="Slider">
      <Slider v-model="formItem.slider" range></Slider>
    </Form-item>
    <Form-item label="Textarea">
      <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Please type here..."></Input>
    </Form-item>
    <Form-item>
      <Button type="primary">Submit</Button>
      <Button type="ghost" style="margin-left: 8px">Cancel</Button>
    </Form-item>
  </Form>
</template>

<script>
export default {
  data () {
    return {
      formItem: {
        input: '',
        select: '',
        radio: 'male',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [20, 50],
        textarea: ''
      }
    }
  },
  middleware: 'auth'
}
</script>
