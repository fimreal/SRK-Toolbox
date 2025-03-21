/**
 * Base58 tests.
 *
 * @author tlwr [toby@toby.codes]
 *
 * @copyright Crown Copyright 2017
 * @license Apache-2.0
 *
 * Modified by Raka-loah@github for zh-CN i18n
 */
import TestRegister from "../../lib/TestRegister.mjs";

TestRegister.addTests([
    {
        name: "To Base58 (Bitcoin): nothing",
        input: "",
        expectedOutput: "",
        recipeConfig: [
            {
                op: "Base58编码",
                args: ["123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"],
            },
        ],
    },
    {
        name: "To Base58 (Ripple): nothing",
        input: "",
        expectedOutput: "",
        recipeConfig: [
            {
                op: "Base58编码",
                args: ["rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"],
            },
        ],
    },
    {
        name: "To Base58 (Bitcoin): 'hello world'",
        input: "hello world",
        expectedOutput: "StV1DL6CwTryKyV",
        recipeConfig: [
            {
                op: "Base58编码",
                args: ["123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"],
            },
        ],
    },
    {
        name: "To Base58 (Ripple): 'hello world'",
        input: "hello world",
        expectedOutput: "StVrDLaUATiyKyV",
        recipeConfig: [
            {
                op: "Base58编码",
                args: ["rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"],
            },
        ],
    },
    {
        name: "To Base58 with null prefix and suffix",
        input: "\0\0\0Hello\0\0\0",
        expectedOutput: "111D7LMXYjHjTu",
        recipeConfig: [
            {
                op: "Base58编码",
                args: ["123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"],
            },
        ],
    },
    {
        name: "From Base58 with null prefix and suffix",
        input: "111D7LMXYjHjTu",
        expectedOutput: "\0\0\0Hello\0\0\0",
        recipeConfig: [
            {
                op: "Base58解码",
                args: ["123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"],
            },
        ],
    },
    {
        name: "From Base58 (Bitcoin): 'StV1DL6CwTryKyV'",
        input: "StV1DL6CwTryKyV",
        expectedOutput: "hello world",
        recipeConfig: [
            {
                op: "Base58解码",
                args: ["123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"],
            },
        ],
    },
    {
        name: "From Base58 (Ripple): 'StVrDLaUATiyKyV'",
        input: "StVrDLaUATiyKyV",
        expectedOutput: "hello world",
        recipeConfig: [
            {
                op: "Base58解码",
                args: ["rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"],
            },
        ],
    },
]);
