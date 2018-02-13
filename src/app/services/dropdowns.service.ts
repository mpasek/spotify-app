import { Injectable } from '@angular/core';

import {Dropdown} from "../models/dropdown.model";
import {BaseModel} from "../models/base.model";


@Injectable()
export class DropdownsService {

  getQuestions() {

    let questions: BaseModel<any>[] = [

      new Dropdown({
        key: 'dropdown',
        label: 'Month',
        options: [
          { key: 'select', value: '-- SELECT --' },
          { key: 'jan', value: 'January' },
          { key: 'feb', value: 'February' },
          { key: 'mar', value: 'March' },
          { key: 'apr', value: 'April' },
          { key: 'may', value: 'May' },
          { key: 'jun', value: 'June' },
          { key: 'jul', value: 'July' },
          { key: 'aug', value: 'August' },
          { key: 'sep', value: 'September' },
          { key: 'oct', value: 'October' },
          { key: 'nov', value: 'November' },
          { key: 'dec', value: 'December' },
        ],
        order: 1
      }),

      new Dropdown({
        key: 'dropdown1',
        label: 'Year',
        options: [
          { key: 'select', value: '-- SELECT --' },
          { key: '2008', value: '2008' },
          { key: '2009', value: '2009' },
          { key: '2010', value: '2010' },
          { key: '2011', value: '2011' },
          { key: '2012', value: '2012' },
          { key: '2013', value: '2013' },
          { key: '2014', value: '2014' },
          { key: '2015', value: '2015' },
          { key: '2016', value: '2016' },
          { key: '2017', value: '2017' },
          { key: '2018', value: '2018' },
        ],
        showWhen: {
          key: 'dropdown',
          value: 'jan',
        },
        order: 2
      }),

      new Dropdown({
        key: 'dropdown2',
        label: 'Year',
        options: [
          { key: 'select', value: '-- SELECT --' },
          { key: '2008', value: '2008' },
          { key: '2009', value: '2009' },
          { key: '2010', value: '2010' },
          { key: '2011', value: '2011' },
          { key: '2012', value: '2012' },
          { key: '2013', value: '2013' },
          { key: '2014', value: '2014' },
          { key: '2015', value: '2015' },
          { key: '2016', value: '2016' },
          { key: '2017', value: '2017' },
          { key: '2018', value: '2018' },
        ],
        showWhen: {
          key: 'dropdown',
          value: 'feb',
        },
        order: 3
      }),

      new Dropdown({
        key: 'dropdown3',
        label: 'Year',
        options: [
          { key: 'select', value: '-- SELECT --' },
          { key: '2008', value: '2008' },
          { key: '2009', value: '2009' },
          { key: '2010', value: '2010' },
          { key: '2011', value: '2011' },
          { key: '2012', value: '2012' },
          { key: '2013', value: '2013' },
          { key: '2014', value: '2014' },
          { key: '2015', value: '2015' },
          { key: '2016', value: '2016' },
          { key: '2017', value: '2017' },
          { key: '2018', value: '2018' },
        ],
        showWhen: {
          key: 'dropdown',
          value: 'mar',
        },
        order: 4
      }),

      new Dropdown({
        key: 'dropdown4',
        label: 'Year',
        options: [
          { key: 'select', value: '-- SELECT --' },
          { key: '2008', value: '2008' },
          { key: '2009', value: '2009' },
          { key: '2010', value: '2010' },
          { key: '2011', value: '2011' },
          { key: '2012', value: '2012' },
          { key: '2013', value: '2013' },
          { key: '2014', value: '2014' },
          { key: '2015', value: '2015' },
          { key: '2016', value: '2016' },
          { key: '2017', value: '2017' },
          { key: '2018', value: '2018' },
        ],
        showWhen: {
          key: 'dropdown',
          value: 'apr',
        },
        order: 5
      }),

      new Dropdown({
        key: 'dropdown5',
        label: 'Year',
        options: [
          { key: 'select', value: '-- SELECT --' },
          { key: '2008', value: '2008' },
          { key: '2009', value: '2009' },
          { key: '2010', value: '2010' },
          { key: '2011', value: '2011' },
          { key: '2012', value: '2012' },
          { key: '2013', value: '2013' },
          { key: '2014', value: '2014' },
          { key: '2015', value: '2015' },
          { key: '2016', value: '2016' },
          { key: '2017', value: '2017' },
          { key: '2018', value: '2018' },
        ],
        showWhen: {
          key: 'dropdown',
          value: 'may',
        },
        order: 6
      }),

      new Dropdown({
        key: 'dropdown6',
        label: 'Year',
        options: [
          { key: 'select', value: '-- SELECT --' },
          { key: '2008', value: '2008' },
          { key: '2009', value: '2009' },
          { key: '2010', value: '2010' },
          { key: '2011', value: '2011' },
          { key: '2012', value: '2012' },
          { key: '2013', value: '2013' },
          { key: '2014', value: '2014' },
          { key: '2015', value: '2015' },
          { key: '2016', value: '2016' },
          { key: '2017', value: '2017' },
          { key: '2018', value: '2018' },
        ],
        showWhen: {
          key: 'dropdown',
          value: 'jun',
        },
        order: 7
      }),

      new Dropdown({
        key: 'dropdown7',
        label: 'Year',
        options: [
          { key: 'select', value: '-- SELECT --' },
          { key: '2008', value: '2008' },
          { key: '2009', value: '2009' },
          { key: '2010', value: '2010' },
          { key: '2011', value: '2011' },
          { key: '2012', value: '2012' },
          { key: '2013', value: '2013' },
          { key: '2014', value: '2014' },
          { key: '2015', value: '2015' },
          { key: '2016', value: '2016' },
          { key: '2017', value: '2017' },
          { key: '2018', value: '2018' },
        ],
        showWhen: {
          key: 'dropdown',
          value: 'jul',
        },
        order: 8
      }),

      new Dropdown({
        key: 'dropdown8',
        label: 'Year',
        options: [
          { key: 'select', value: '-- SELECT --' },
          { key: '2008', value: '2008' },
          { key: '2009', value: '2009' },
          { key: '2010', value: '2010' },
          { key: '2011', value: '2011' },
          { key: '2012', value: '2012' },
          { key: '2013', value: '2013' },
          { key: '2014', value: '2014' },
          { key: '2015', value: '2015' },
          { key: '2016', value: '2016' },
          { key: '2017', value: '2017' },
          { key: '2018', value: '2018' },
        ],
        showWhen: {
          key: 'dropdown',
          value: 'aug',
        },
        order: 9
      }),

      new Dropdown({
        key: 'dropdown9',
        label: 'Year',
        options: [
          { key: 'select', value: '-- SELECT --' },
          { key: '2008', value: '2008' },
          { key: '2009', value: '2009' },
          { key: '2010', value: '2010' },
          { key: '2011', value: '2011' },
          { key: '2012', value: '2012' },
          { key: '2013', value: '2013' },
          { key: '2014', value: '2014' },
          { key: '2015', value: '2015' },
          { key: '2016', value: '2016' },
          { key: '2017', value: '2017' },
          { key: '2018', value: '2018' },
        ],
        showWhen: {
          key: 'dropdown',
          value: 'sep',
        },
        order: 10
      }),

      new Dropdown({
        key: 'dropdown10',
        label: 'Year',
        options: [
          { key: 'select', value: '-- SELECT --' },
          { key: '2008', value: '2008' },
          { key: '2009', value: '2009' },
          { key: '2010', value: '2010' },
          { key: '2011', value: '2011' },
          { key: '2012', value: '2012' },
          { key: '2013', value: '2013' },
          { key: '2014', value: '2014' },
          { key: '2015', value: '2015' },
          { key: '2016', value: '2016' },
          { key: '2017', value: '2017' },
          { key: '2018', value: '2018' },
        ],
        showWhen: {
          key: 'dropdown',
          value: 'oct',
        },
        order: 11
      }),

      new Dropdown({
        key: 'dropdown11',
        label: 'Year',
        options: [
          { key: 'select', value: '-- SELECT --' },
          { key: '2008', value: '2008' },
          { key: '2009', value: '2009' },
          { key: '2010', value: '2010' },
          { key: '2011', value: '2011' },
          { key: '2012', value: '2012' },
          { key: '2013', value: '2013' },
          { key: '2014', value: '2014' },
          { key: '2015', value: '2015' },
          { key: '2016', value: '2016' },
          { key: '2017', value: '2017' },
          { key: '2018', value: '2018' },
        ],
        showWhen: {
          key: 'dropdown',
          value: 'nov',
        },
        order: 12
      }),

      new Dropdown({
        key: 'dropdown12',
        label: 'Year',
        options: [
          { key: 'select', value: '-- SELECT --' },
          { key: '2008', value: '2008' },
          { key: '2009', value: '2009' },
          { key: '2010', value: '2010' },
          { key: '2011', value: '2011' },
          { key: '2012', value: '2012' },
          { key: '2013', value: '2013' },
          { key: '2014', value: '2014' },
          { key: '2015', value: '2015' },
          { key: '2016', value: '2016' },
          { key: '2017', value: '2017' },
          { key: '2018', value: '2018' },
        ],
        showWhen: {
          key: 'dropdown',
          value: 'dec',
        },
        order: 13
      }),

    ]

    return questions.sort((a, b) => a.order - b.order);
  }
}
