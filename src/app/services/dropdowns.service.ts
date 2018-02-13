import { Injectable } from '@angular/core';

import {Dropdown} from "../models/dropdown.model";
import {BaseModel} from "../models/base.model";


@Injectable()
export class DropdownsService {

  getQuestions() {

    let questions: BaseModel<any>[] = [

      new Dropdown({
        key: 'month',
        label: 'Month',
        options: [
          { key: 'select', value: '-- SELECT --' },
          { key: 'January', value: 'January' },
          { key: 'February', value: 'February' },
          { key: 'March', value: 'March' },
          { key: 'April', value: 'April' },
          { key: 'May', value: 'May' },
          { key: 'June', value: 'June' },
          { key: 'July', value: 'July' },
          { key: 'August', value: 'August' },
          { key: 'September', value: 'September' },
          { key: 'October', value: 'October' },
          { key: 'November', value: 'November' },
          { key: 'December', value: 'December' },
        ],
        order: 1
      }),

      new Dropdown({
        key: 'year',
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
        order: 2
      }),


      // TODO: This is in place for when implementing the dynamic dropdowns
      /*new Dropdown({
        key: 'year1',
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
          key: 'month',
          value: 'jan',
        },
        order: 2
      }),

      new Dropdown({
        key: 'year2',
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
          key: 'month',
          value: 'feb',
        },
        order: 3
      }),

      new Dropdown({
        key: 'year3',
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
          key: 'month',
          value: 'mar',
        },
        order: 4
      }),

      new Dropdown({
        key: 'year4',
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
          key: 'month',
          value: 'apr',
        },
        order: 5
      }),

      new Dropdown({
        key: 'year5',
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
          key: 'month',
          value: 'may',
        },
        order: 6
      }),

      new Dropdown({
        key: 'year6',
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
          key: 'month',
          value: 'jun',
        },
        order: 7
      }),

      new Dropdown({
        key: 'year7',
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
          key: 'month',
          value: 'jul',
        },
        order: 8
      }),

      new Dropdown({
        key: 'year8',
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
          key: 'month',
          value: 'aug',
        },
        order: 9
      }),

      new Dropdown({
        key: 'year9',
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
          key: 'month',
          value: 'sep',
        },
        order: 10
      }),

      new Dropdown({
        key: 'year10',
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
          key: 'month',
          value: 'oct',
        },
        order: 11
      }),

      new Dropdown({
        key: 'year11',
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
          key: 'month',
          value: 'nov',
        },
        order: 12
      }),

      new Dropdown({
        key: 'year12',
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
          key: 'month',
          value: 'dec',
        },
        order: 13
      }),*/

    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
