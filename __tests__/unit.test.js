// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('check phone number (012)345-6789', () => {
    expect(isPhoneNumber("(012)345-6789")).toBe(true);
});

test('check phone number 012-345-6789', () => {
    expect(isPhoneNumber("012-345-6789")).toBe(true);
});

test('check phone number 0123456789', () => {
    expect(isPhoneNumber("0123456789")).toBe(false);
});

test('check phone number ', () => {
    expect(isPhoneNumber("")).toBe(false);
});

test('check email test@gmail.com', () => {
    expect(isEmail("test@gmail.com")).toBe(true);
});

test('check email test@ucsd.edu', () => {
    expect(isEmail("test@ucsd.edu")).toBe(true);
});

test('check email test@gmail', () => {
    expect(isEmail("test@gmail")).toBe(false);
});

test('check email @', () => {
    expect(isEmail("@")).toBe(false);
});

test('check password test', () => {
    expect(isStrongPassword("test")).toBe(true);
});

test('check password test_123', () => {
    expect(isStrongPassword("test_123")).toBe(true);
});

test('check password 123_test', () => {
    expect(isStrongPassword("123_test")).toBe(false);
});

test('check password txt', () => {
    expect(isStrongPassword("txt")).toBe(false);
});

test('check date 01/1/2001', () => {
    expect(isDate("01/1/2001")).toBe(true);
});

test('check date 1/01/2001', () => {
    expect(isDate("1/01/2001")).toBe(true);
});

test('check date 1/001/2001', () => {
    expect(isDate("1/001/2001")).toBe(false);
});

test('check date 1/1/20001', () => {
    expect(isDate("1/1/20001")).toBe(false);
});

test('check hex color F00', () => {
    expect(isHexColor("F00")).toBe(true);
});

test('check hex color #FF0000', () => {
    expect(isHexColor("#FF0000")).toBe(true);
});

test('check hex color #FFFF', () => {
    expect(isHexColor("#FFFF")).toBe(false);
});

test('check hex color F0', () => {
    expect(isHexColor("F0")).toBe(false);
});